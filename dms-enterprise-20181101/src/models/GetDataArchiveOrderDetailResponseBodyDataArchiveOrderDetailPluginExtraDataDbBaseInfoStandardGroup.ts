// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the instance engine. For information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * @example
   * adb_mysql default
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed in Flexible Management or Stable Change mode. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  freeOrStable?: boolean;
  /**
   * @remarks
   * The time when the security rule was created.
   * 
   * @example
   * 2020-05-24 14:12:32
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the security rule was last modified.
   * 
   * @example
   * 2020-05-25 14:12:32
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the control mode of the instance. Valid values:
   * 
   * *   **COMMON**: The instance is managed in Security Collaboration mode.
   * *   **NONE_CONTROL**: The instance is managed in Flexible Management mode.
   * *   **STABLE**: The instance is managed in Stable Change mode.
   * 
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule that corresponds to the control mode.
   * 
   * @example
   * adb_mysql default
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the security rule.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The user ID of the last modified security rule.
   * 
   * @example
   * 12****
   */
  lastMenderId?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      description: 'Description',
      freeOrStable: 'FreeOrStable',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupMode: 'GroupMode',
      groupName: 'GroupName',
      id: 'Id',
      lastMenderId: 'LastMenderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      description: 'string',
      freeOrStable: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupMode: 'string',
      groupName: 'string',
      id: 'number',
      lastMenderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

