// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAivppResourcesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * DATA
   */
  instanceType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceType: 'string',
      maxResults: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

