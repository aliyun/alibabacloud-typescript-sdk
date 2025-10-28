// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSummariesResponseBodyCenterSummary extends $dara.Model {
  registeredResourceTypeCount?: number;
  templateCount?: string;
  static names(): { [key: string]: string } {
    return {
      registeredResourceTypeCount: 'RegisteredResourceTypeCount',
      templateCount: 'TemplateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registeredResourceTypeCount: 'number',
      templateCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBodyRegionSummariesStackDetails extends $dara.Model {
  briefStatus?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      briefStatus: 'BriefStatus',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefStatus: 'string',
      count: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBodyRegionSummaries extends $dara.Model {
  regionId?: string;
  stackCount?: string;
  stackDetails?: ListSummariesResponseBodyRegionSummariesStackDetails[];
  stackGroupCount?: string;
  templateScratchCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackCount: 'StackCount',
      stackDetails: 'StackDetails',
      stackGroupCount: 'StackGroupCount',
      templateScratchCount: 'TemplateScratchCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackCount: 'string',
      stackDetails: { 'type': 'array', 'itemType': ListSummariesResponseBodyRegionSummariesStackDetails },
      stackGroupCount: 'string',
      templateScratchCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackDetails)) {
      $dara.Model.validateArray(this.stackDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBody extends $dara.Model {
  centerSummary?: ListSummariesResponseBodyCenterSummary;
  regionSummaries?: ListSummariesResponseBodyRegionSummaries[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      centerSummary: 'CenterSummary',
      regionSummaries: 'RegionSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerSummary: ListSummariesResponseBodyCenterSummary,
      regionSummaries: { 'type': 'array', 'itemType': ListSummariesResponseBodyRegionSummaries },
      requestId: 'string',
    };
  }

  validate() {
    if(this.centerSummary && typeof (this.centerSummary as any).validate === 'function') {
      (this.centerSummary as any).validate();
    }
    if(Array.isArray(this.regionSummaries)) {
      $dara.Model.validateArray(this.regionSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

