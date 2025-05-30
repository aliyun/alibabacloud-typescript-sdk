// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyDataResources } from "./ListResourcesResponseBodyDataResources";


export class ListResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * ZmN0X21vbnRoX3Rhb2Jhb19pbmRleCE=
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: ListResourcesResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyDataResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

