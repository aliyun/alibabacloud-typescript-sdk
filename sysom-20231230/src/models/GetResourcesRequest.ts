// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * mem
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

