// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTopDataRequestFields extends $dara.Model {
  dimension?: string[];
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: { 'type': 'array', 'itemType': 'string' },
      fieldName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimension)) {
      $dara.Model.validateArray(this.dimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteTopDataRequest extends $dara.Model {
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: DescribeSiteTopDataRequestFields[];
  interval?: string;
  limit?: string;
  siteId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fields: 'Fields',
      interval: 'Interval',
      limit: 'Limit',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fields: { 'type': 'array', 'itemType': DescribeSiteTopDataRequestFields },
      interval: 'string',
      limit: 'string',
      siteId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

