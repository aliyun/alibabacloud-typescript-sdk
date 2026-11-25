// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The color.
   * 
   * @example
   * #B0B0B0
   */
  colorHex?: string;
  /**
   * @remarks
   * Specifies whether the image contains a person.
   * 
   * @example
   * false
   */
  hasPerson?: boolean;
  /**
   * @remarks
   * The image category. Valid values:
   * - normal: Illustrations and article images.
   * - banner: Background images and carousel images.
   * - goods: Product or service images.
   * 
   * @example
   * WindowsWithMssqlStdLicense
   */
  imageCategory?: string;
  /**
   * @remarks
   * The aspect ratio of the image. Valid values:
   * - "16:9"
   * - "4:3"
   * - "2:1"
   * - "1:1"
   * - "3:4"
   * - "9:16"
   * 
   * @example
   * 16:9
   */
  imageRatio?: string;
  /**
   * @remarks
   * The maximum height of the image.
   * 
   * @example
   * 4000
   */
  maxHeight?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * The maximum width of the image, inclusive.
   * 
   * @example
   * 4000
   */
  maxWidth?: number;
  /**
   * @remarks
   * The minimum height of the image.
   * 
   * @example
   * 500
   */
  minHeight?: number;
  /**
   * @remarks
   * The minimum width of the image, inclusive.
   * 
   * @example
   * 500
   */
  minWidth?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous call to this operation. You do not need to set this parameter for the first call. If NextToken is set, the PageSize and PageNumber request parameters become invalid, and the TotalCount value in the response is invalid.
   * 
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The OSS key.
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  /**
   * @remarks
   * The number of results to return. Default value: 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The starting position of the returned results. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The descriptive text used to search for images. A maximum of 512 characters are supported.
   * 
   * @example
   * Bathroom hardware products, featuring a brushed stainless steel surface with an overall modern silver-gray tone, presenting a minimalist and textured style. The products include accessories such as showerheads, faucets, and towel racks, all of which are rust-proof and corrosion-resistant, making them suitable for humid environments. The joints between components are precisely designed with hidden screw structures to enhance overall aesthetics. The faucets and showerheads support multiple water flow modes, and the handles operate smoothly, conforming to ergonomic design. All hardware fittings have passed the national water-saving certification, support both cold and hot water connections, and are wall-mounted
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      colorHex: 'ColorHex',
      hasPerson: 'HasPerson',
      imageCategory: 'ImageCategory',
      imageRatio: 'ImageRatio',
      maxHeight: 'MaxHeight',
      maxResults: 'MaxResults',
      maxWidth: 'MaxWidth',
      minHeight: 'MinHeight',
      minWidth: 'MinWidth',
      nextToken: 'NextToken',
      ossKey: 'OssKey',
      size: 'Size',
      start: 'Start',
      tagsShrink: 'Tags',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorHex: 'string',
      hasPerson: 'boolean',
      imageCategory: 'string',
      imageRatio: 'string',
      maxHeight: 'number',
      maxResults: 'number',
      maxWidth: 'number',
      minHeight: 'number',
      minWidth: 'number',
      nextToken: 'string',
      ossKey: 'string',
      size: 'number',
      start: 'number',
      tagsShrink: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

