// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReparseSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to synchronously wait for the re-parsing to complete. Default value: false, which indicates asynchronous queuing.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The ID of the data source to re-parse. This ID is unique within the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceSync: 'boolean',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

