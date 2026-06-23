// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPublicKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance where the user whose public keys you want to query resides.
   * 
   * > You can call the [describeinstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.<br> The maximum value of the PageSize parameter is 100. Default value: 20. If this parameter is empty, 20 entries are returned by default.
   * 
   * > We recommend that you do not leave the PageSize parameter empty.
   * 
   * @example
   * 50
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where the user resides.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose public keys you want to query.
   * 
   * @example
   * 2
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

