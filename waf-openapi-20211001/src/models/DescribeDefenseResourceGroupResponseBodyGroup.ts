// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the protected object group was created.
   * 
   * @example
   * 23242312312
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent time when the protected object group was modified.
   * 
   * @example
   * 23242312312
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The protected objects in the protected object group. The protected objects are separated with commas (,).
   * 
   * @example
   * test1.aliyundoc.com,test2.aliyundoc.com
   */
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

