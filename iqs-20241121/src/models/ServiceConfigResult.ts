// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceConfigResult extends $dara.Model {
  poiSearchTotalQuota?: string;
  poiSearchUsedQuota?: string;
  searchTotalQuota?: string;
  searchUsedQuota?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      poiSearchTotalQuota: 'poiSearchTotalQuota',
      poiSearchUsedQuota: 'poiSearchUsedQuota',
      searchTotalQuota: 'searchTotalQuota',
      searchUsedQuota: 'searchUsedQuota',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poiSearchTotalQuota: 'string',
      poiSearchUsedQuota: 'string',
      searchTotalQuota: 'string',
      searchUsedQuota: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

