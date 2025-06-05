// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions } from "./DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions";


export class DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of DNS servers.
   */
  nameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  options?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of DNS servers.
   */
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServers: 'NameServers',
      options: 'Options',
      searches: 'Searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServers: { 'type': 'array', 'itemType': 'string' },
      options: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nameServers)) {
      $dara.Model.validateArray(this.nameServers);
    }
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    if(Array.isArray(this.searches)) {
      $dara.Model.validateArray(this.searches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

