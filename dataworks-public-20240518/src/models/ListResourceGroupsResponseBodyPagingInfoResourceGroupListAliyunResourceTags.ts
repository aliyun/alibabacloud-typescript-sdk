// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsResponseBodyPagingInfoResourceGroupListAliyunResourceTags extends $dara.Model {
  /**
   * @remarks
   * Tag Key
   * 
   * @example
   * Key
   */
  key?: string;
  /**
   * @remarks
   * Tag Value
   * 
   * @example
   * Value
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

