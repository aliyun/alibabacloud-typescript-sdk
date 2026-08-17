// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlinkAiServiceResponseBodyFlinkAiServiceDTO extends $dara.Model {
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The status of the Flink AI instance. Valid values:
   * - CLOSED: closed or not activated.
   * - WAITING: waiting to be activated after payment.
   * - OPENING: being activated.
   * - RUNNING: activated.
   * - CLOSING: being closed.
   * - DISABLE: overdue payment.
   * 
   * @example
   * CLOSED
   */
  flinkAiInstanceStatus?: string;
  /**
   * @remarks
   * The AI service order instance ID.
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
   * The time when the AI service was activated, in timestamp format (milliseconds).
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
   * The Flink AI service data transfer object.
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
   * Indicates whether the request was successful.
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

