// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag object
   * 
   * @example
   * key_aa
   */
  key?: string;
  /**
   * @remarks
   * The value of tag object
   * 
   * @example
   * value_aa
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

