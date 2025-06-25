// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagCloudResourcesResponseBodyResourceTagsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The tag type.
   * 
   * Valid values:
   * 
   * *   Custom: custom tag.
   * *   System: system tag.
   * 
   * @example
   * Custom
   */
  scope?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1080p
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
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

