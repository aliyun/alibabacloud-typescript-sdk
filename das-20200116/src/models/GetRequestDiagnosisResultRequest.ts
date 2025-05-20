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
   * The unique ID of the diagnostic task.[](~~341609~~)
   * 
   * >  If you set MessageId to the task ID of the automatic SQL optimization feature, no result is returned.
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
   * >  You must specify the node ID if your database instance is a PolarDB for MySQL cluster, a PolarDB for PostgreSQL (compatible with Oracle) instance, or an ApsaraDB for MongoDB database.
   * 
   * @example
   * 202****
   */
  nodeId?: string;
  /**
   * @remarks
   * The source of the task.
   * 
   * >  This parameter is required if you call this operation in the DAS console. You do not need to specify this parameter when you call this operation.
   * 
   * @example
   * None
   */
  source?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * >  This parameter is required if you call this operation in the DAS console. You do not need to specify this parameter when you call this operation.
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

