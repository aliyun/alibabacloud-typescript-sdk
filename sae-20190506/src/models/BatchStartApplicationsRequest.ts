// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications that you want to start. Separate multiple IDs with commas (,).
   * 
   * @example
   * ebf491f0-c1a5-45e2-b2c4-710dbe2a****
   */
  appIds?: string;
  /**
   * @remarks
   * The ID of the request.
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

