// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * IDs of all applications that are related to the lane group. Separate multiple applications with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * bdb251cc-02a6-48dd-891b-2ab21b25****,ee33ed0c-fddc-47b5-9f63-e1ccc4be****
   */
  appIds?: string;
  /**
   * @remarks
   * The ingress application. The application is in the EDAS:{application ID} format.
   * 
   * This parameter is required.
   * 
   * @example
   * EDAS:5cc89013-9232-4b36-b3eb-ff89b3d2****
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the custom namespace. The ID is in the physical region ID:custom namespace identifier format. Example: cn-hangzhou:test.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryApp: 'EntryApp',
      logicalRegionId: 'LogicalRegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      entryApp: 'string',
      logicalRegionId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

