// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The marker. If the response is truncated, you can use `Marker` to retrieve the content that starts from the position after the truncation point.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If the response is truncated because it reaches the `MaxItems` limit, the `IsTruncated` parameter is set to `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

