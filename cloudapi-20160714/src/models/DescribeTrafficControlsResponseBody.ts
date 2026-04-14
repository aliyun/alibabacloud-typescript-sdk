// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial extends $dara.Model {
  specialKey?: string;
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      specialKey: 'SpecialKey',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialKey: 'string',
      trafficValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials extends $dara.Model {
  special?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial[];
  static names(): { [key: string]: string } {
    return {
      special: 'Special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      special: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial },
    };
  }

  validate() {
    if(Array.isArray(this.special)) {
      $dara.Model.validateArray(this.special);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy extends $dara.Model {
  specialType?: string;
  specials?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials;
  static names(): { [key: string]: string } {
    return {
      specialType: 'SpecialType',
      specials: 'Specials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialType: 'string',
      specials: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials,
    };
  }

  validate() {
    if(this.specials && typeof (this.specials as any).validate === 'function') {
      (this.specials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies extends $dara.Model {
  specialPolicy?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy[];
  static names(): { [key: string]: string } {
    return {
      specialPolicy: 'SpecialPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPolicy: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.specialPolicy)) {
      $dara.Model.validateArray(this.specialPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl extends $dara.Model {
  apiDefault?: number;
  appDefault?: number;
  createdTime?: string;
  description?: string;
  modifiedTime?: string;
  specialPolicies?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies;
  trafficControlId?: string;
  trafficControlName?: string;
  trafficControlUnit?: string;
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      specialPolicies: 'SpecialPolicies',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      specialPolicies: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies,
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
    };
  }

  validate() {
    if(this.specialPolicies && typeof (this.specialPolicies as any).validate === 'function') {
      (this.specialPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBodyTrafficControls extends $dara.Model {
  trafficControl?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl[];
  static names(): { [key: string]: string } {
    return {
      trafficControl: 'TrafficControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControl: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControl)) {
      $dara.Model.validateArray(this.trafficControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93D91A99-F093-4596-87BA-3C4FBFD3FD8A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  trafficControls?: DescribeTrafficControlsResponseBodyTrafficControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControls: 'TrafficControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      trafficControls: DescribeTrafficControlsResponseBodyTrafficControls,
    };
  }

  validate() {
    if(this.trafficControls && typeof (this.trafficControls as any).validate === 'function') {
      (this.trafficControls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

