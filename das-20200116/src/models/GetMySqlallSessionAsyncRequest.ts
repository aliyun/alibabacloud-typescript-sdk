// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMySQLAllSessionAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  Only ApsaraDB RDS for MySQL, PolarDB for MySQL, and PolarDB-X 2.0 instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  You must specify this parameter for PolarDB for MySQL clusters. If you do not specify a node ID, the session data of the primary node is returned by default.
   * 
   * @example
   * pi-wz954ryd8f893****
   */
  nodeId?: string;
  /**
   * @remarks
   * The asynchronous request ID.
   * 
   * >  GetMySQLAllSessionAsync is an asynchronous operation. After a request is sent, the system does not return complete results but returns a **request ID**. You need to use the **request ID** to initiate requests until the value of the **isFinish** field in the returned results is **true**, the complete results are returned. This indicates that to obtain complete data, you must call this operation at least twice.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      resultId: 'ResultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      resultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

