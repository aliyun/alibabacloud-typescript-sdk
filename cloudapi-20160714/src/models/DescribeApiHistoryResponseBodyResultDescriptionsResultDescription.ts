// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyResultDescriptionsResultDescription extends $dara.Model {
  /**
   * @remarks
   * The subnode description.
   * 
   * @example
   * for_test1
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether a subnode exists.
   * 
   * @example
   * true
   */
  hasChild?: boolean;
  /**
   * @remarks
   * The result ID.
   * 
   * @example
   * id
   */
  id?: string;
  /**
   * @remarks
   * The primary key of the result.
   * 
   * @example
   * groupName
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  mandatory?: boolean;
  /**
   * @remarks
   * The result name.
   * 
   * @example
   * fwqf
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent node.
   * 
   * @example
   * pid
   */
  pid?: string;
  /**
   * @remarks
   * The result type.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasChild: 'HasChild',
      id: 'Id',
      key: 'Key',
      mandatory: 'Mandatory',
      name: 'Name',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasChild: 'boolean',
      id: 'string',
      key: 'string',
      mandatory: 'boolean',
      name: 'string',
      pid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

