// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlinkAiServiceResponseBodyFlinkAiServiceDTO extends $dara.Model {
  /**
   * @remarks
   * Indicates whether release protection is enabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The status of the Flink AI instance. Valid values:
   * - CLOSED: The service is closed or not activated.
   * - WAITING: The service is waiting for activation after successful payment.
   * - OPENING: The service is being activated.
   * - RUNNING: The service is activated.
   * - CLOSING: The service is being closed.
   * - DISABLE: The service has an overdue payment.
   * 
   * @example
   * CLOSED
   */
  flinkAiInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the AI service order instance.
   * 
   * @example
   * sc_flinkaifuncpost_public_cn-o3s4xabcdef
   */
  mainInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The activation time of the AI service. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1786934292
   */
  resourceCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      flinkAiInstanceStatus: 'FlinkAiInstanceStatus',
      mainInstanceId: 'MainInstanceId',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      flinkAiInstanceStatus: 'string',
      mainInstanceId: 'string',
      region: 'string',
      resourceCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlinkAiServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data transfer object for the Flink AI service.
   */
  flinkAiServiceDTO?: GetFlinkAiServiceResponseBodyFlinkAiServiceDTO;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B21DC47E-8928-199A-9F32-36D45E4693B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      flinkAiServiceDTO: 'FlinkAiServiceDTO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flinkAiServiceDTO: GetFlinkAiServiceResponseBodyFlinkAiServiceDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.flinkAiServiceDTO && typeof (this.flinkAiServiceDTO as any).validate === 'function') {
      (this.flinkAiServiceDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

