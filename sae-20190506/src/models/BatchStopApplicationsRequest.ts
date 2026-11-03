// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications to be stopped.
   * > 
   * > To stop multiple applications at the same time, separate the application IDs with commas (,).
   * 
   * @example
   * ebf491f0-c1a5-45e2-b2c4-710dbe2a****
   */
  appIds?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The version of the application.
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

