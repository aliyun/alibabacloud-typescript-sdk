// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * disabled
   */
  crossRegionReplication?: string;
  /**
   * @remarks
   * The edition of the license. Valid values:
   * - free: Free edition.
   * - trial: Trial edition.
   * - scalability: Scalability edition.
   * - standard: Standard edition.
   * - enterprise: Enterprise edition.
   * 
   * @example
   * free
   */
  edition?: string;
  /**
   * @remarks
   * Instance ID list.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Instance status. Valid values:
   * - creating: Being created.
   * - running: Running.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      crossRegionReplication: 'CrossRegionReplication',
      edition: 'Edition',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossRegionReplication: 'string',
      edition: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

