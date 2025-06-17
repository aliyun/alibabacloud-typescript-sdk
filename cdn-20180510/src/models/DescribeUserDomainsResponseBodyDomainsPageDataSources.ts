// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource } from "./DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource";


export class DescribeUserDomainsResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  validate() {
    if(Array.isArray(this.source)) {
      $dara.Model.validateArray(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

