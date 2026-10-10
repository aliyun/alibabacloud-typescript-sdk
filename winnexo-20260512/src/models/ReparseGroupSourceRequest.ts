// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReparseGroupSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to synchronously wait for the re-parsing to complete. Default value: false, which indicates that the request is asynchronously queued.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, which is the business ID.
   * 
   * This parameter is required.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this parameter explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      forceSync: 'forceSync',
      groupId: 'groupId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceSync: 'boolean',
      groupId: 'string',
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

