// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRequestDiagnosisResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-0iwhhl8gx0ld6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The unique diagnosis ID returned by the [CreateRequestDiagnosis](https://help.aliyun.com/document_detail/341609.html) operation.
   * 
   * > If `MessageId` is the diagnosis ID for automatic SQL optimization, this operation does not return diagnosis results.
   * 
   * This parameter is required.
   * 
   * @example
   * 61820b594664275c4429****
   */
  messageId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > This parameter is required for cluster instances such as PolarDB for MySQL, PolarDB for PostgreSQL (Oracle-compatible), and ApsaraDB for MongoDB.
   * 
   * @example
   * 202****
   */
  nodeId?: string;
  /**
   * @remarks
   * The source of the task.
   * 
   * > This parameter is for internal use by the DAS console. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  source?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * > This parameter is for internal use by the DAS console. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      nodeId: 'NodeId',
      source: 'Source',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messageId: 'string',
      nodeId: 'string',
      source: 'string',
      sqlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

