// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsResponseBodyDomainsBackedsHttp } from "./DescribeDomainsResponseBodyDomainsBackedsHttp";
import { DescribeDomainsResponseBodyDomainsBackedsHttps } from "./DescribeDomainsResponseBodyDomainsBackedsHttps";


export class DescribeDomainsResponseBodyDomainsBackeds extends $dara.Model {
  /**
   * @remarks
   * The HTTP addresses of the origin server.
   */
  http?: DescribeDomainsResponseBodyDomainsBackedsHttp[];
  /**
   * @remarks
   * The HTTPS addresses of the origin server.
   */
  https?: DescribeDomainsResponseBodyDomainsBackedsHttps[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttp },
      https: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttps },
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

