// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyResultDescriptionsResultDescription extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * result description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether a subnode exists.
   * 
   * @example
   * false
   */
  hasChild?: boolean;
  /**
   * @remarks
   * The ID of the result.
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
   * DEMO
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * true
   */
  mandatory?: boolean;
  /**
   * @remarks
   * The name of the result.
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
   * The type of the result.
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

