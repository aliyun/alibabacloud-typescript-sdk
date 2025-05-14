// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureResponseBodyRelationsLinks extends $dara.Model {
  /**
   * @example
   * model_feature_2
   */
  from?: string;
  /**
   * @example
   * user_id
   */
  link?: string;
  /**
   * @example
   * feature_entity_3
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      link: 'Link',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      link: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

