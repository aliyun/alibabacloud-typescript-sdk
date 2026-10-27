// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The fuzzy match value used to query images.
   * 
   * > This parameter supports fuzzy queries for image IDs, image tags, image instance IDs, image repository names, image repository IDs, image repository namespaces, image regions, image digests, and image repository types.
   * 
   * @example
   * 525
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

