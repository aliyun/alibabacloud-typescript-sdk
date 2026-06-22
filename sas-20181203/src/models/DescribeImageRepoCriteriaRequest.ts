// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The search value for image repositories.
   * 
   * > This parameter supports fuzzy match for image IDs, tags, image instance IDs, repository names, repository namespaces, repository IDs, repository regions, digests, and repository types.
   * 
   * @example
   * 2.0.2
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

