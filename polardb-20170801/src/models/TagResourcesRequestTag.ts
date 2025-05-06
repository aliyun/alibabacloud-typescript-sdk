// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to create for the cluster. To create multiple tags for a cluster at a time, click **Add** to add tag keys.
   * 
   * >  You can create up to 20 tags for a cluster at a time. The value of `Tag.N.Key` is paired with the value of `Tag.N.Value`.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to create for the cluster. To create multiple tags for a cluster at a time, click **Add** to add tag values.
   * 
   * >  You can create up to 20 tags for a cluster at a time. The value of `Tag.N.Key` is paired with the value of `Tag.N.Value`.
   * 
   * @example
   * test
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

