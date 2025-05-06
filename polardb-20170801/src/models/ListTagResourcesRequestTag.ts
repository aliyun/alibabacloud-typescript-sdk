// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. To query the details of clusters to which multiple tags are added, click **Add** to add tags.
   * 
   * > 
   * 
   * *   You must specify at least one of the `ResourceId.N` and `Tag.N.Key` parameters.
   * 
   * *   If you specify the `Tag.N.Key` parameter, you can create up to 20 tags at a time.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag value that is paired with the tag key. This parameter can be set to an empty string.
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

