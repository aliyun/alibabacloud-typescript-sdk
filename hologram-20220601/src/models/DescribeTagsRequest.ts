// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to display tags.
   * 
   * @example
   * true
   */
  tagsOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tagsOnly: 'tagsOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tagsOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

