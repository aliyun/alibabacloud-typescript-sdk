// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to stop.
   * 
   * > If you want to stop multiple applications at the same time, separate the IDs with commas (,).
   * 
   * @example
   * ebf491f0-c1a5-45e2-b2c4-710dbe2a****
   */
  appIds?: string;
  /**
   * @remarks
   * ebf491f0-c1a5-45e2-b2c4-710dbe2a\\*\\*\\*\\*,ebf491f0-c1a5-45e2-b2c4-71025e2a\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      namespaceId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

