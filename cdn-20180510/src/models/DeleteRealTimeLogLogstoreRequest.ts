// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRealTimeLogLogstoreRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore to which log entries are delivered.
   * 
   * This parameter is required.
   * 
   * @example
   * LogstoreName
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * ProjectName
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed. For more information, see [Regions that support real-time log delivery](https://help.aliyun.com/document_detail/144883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

