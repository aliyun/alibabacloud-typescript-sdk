// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowLogServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the flow log service is activated. Valid values:
   * 
   * - **true**: The flow log service is activated.
   * 
   * - **false**: The flow log service is not activated. You can call the [OpenFlowLogService](https://help.aliyun.com/document_detail/449637.html) operation to activate the flow log service.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-06F83A1B457
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

