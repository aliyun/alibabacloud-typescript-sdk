// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansCoverageDetailRequestFilterParamDimensions extends $dara.Model {
  code?: string;
  selectType?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      selectType: 'SelectType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      selectType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequestFilterParamTags extends $dara.Model {
  code?: string;
  selectType?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      selectType: 'SelectType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      selectType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequestFilterParam extends $dara.Model {
  dimensions?: DescribeSavingsPlansCoverageDetailRequestFilterParamDimensions[];
  tags?: DescribeSavingsPlansCoverageDetailRequestFilterParamTags[];
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailRequestFilterParamDimensions },
      tags: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailRequestFilterParamTags },
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query coverage details.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-08-09 00:00:00
   */
  endPeriod?: string;
  filterParam?: DescribeSavingsPlansCoverageDetailRequestFilterParam;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @remarks
   * The time granularity at which coverage details are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-15 13:40:45
   */
  startPeriod?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to set this parameter if you query coverage details within a specific time range for the first time. The response returns a token that you can use to query coverage details that are displayed on the next page. If a null value is returned for the NextToken parameter, no more coverage details can be queried.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      filterParam: 'FilterParam',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      filterParam: DescribeSavingsPlansCoverageDetailRequestFilterParam,
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  validate() {
    if(this.filterParam && typeof (this.filterParam as any).validate === 'function') {
      (this.filterParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

