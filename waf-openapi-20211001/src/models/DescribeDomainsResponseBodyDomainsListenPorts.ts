// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBodyDomainsListenPorts extends $dara.Model {
  /**
   * @remarks
   * The HTTP listener ports.
   */
  http?: number[];
  /**
   * @remarks
   * The HTTPS listener ports.
   */
  https?: number[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.http)) {
      $dara.Model.validateArray(this.http);
    }
    if(Array.isArray(this.https)) {
      $dara.Model.validateArray(this.https);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

