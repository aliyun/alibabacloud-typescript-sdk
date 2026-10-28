// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable AI workspace data. This parameter is optional. Default value: true.
   * 
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  /**
   * @remarks
   * The list of tags to be added. A maximum of 20 tags can be added.
   */
  tag?: GetResourceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
      tag: { 'type': 'array', 'itemType': GetResourceGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

