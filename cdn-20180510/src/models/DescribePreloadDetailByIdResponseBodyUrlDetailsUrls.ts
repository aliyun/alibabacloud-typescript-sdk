// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadDetailByIdResponseBodyUrlDetailsUrls extends $dara.Model {
  /**
   * @remarks
   * The details of resource prefetch.
   * 
   * *   If the resource is prefetched on all POPs, "Successfully preloaded" is returned.
   * *   If the resource fails to be prefetched on some POPs, the failure details separated by vertical bars (|) are returned.
   * 
   * @example
   * Successfully preloaded
   */
  description?: string;
  /**
   * @remarks
   * The success percentage, which indicates the number of POPs on which the resource is prefetched.
   * 
   * @example
   * 47%
   */
  success?: string;
  /**
   * @remarks
   * The URL of the prefetched resource.
   * 
   * @example
   * /abc.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      success: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

