// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren extends $dara.Model {
  childDivisionName?: string;
  static names(): { [key: string]: string } {
    return {
      childDivisionName: 'ChildDivisionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childDivisionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren extends $dara.Model {
  children?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren[];
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildrenChildren },
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision extends $dara.Model {
  children?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren;
  divisionName?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      divisionName: 'DivisionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivisionChildren,
      divisionName: 'string',
    };
  }

  validate() {
    if(this.children && typeof (this.children as any).validate === 'function') {
      (this.children as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBodyAdminDivisions extends $dara.Model {
  adminDivision?: QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision[];
  static names(): { [key: string]: string } {
    return {
      adminDivision: 'AdminDivision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminDivision: { 'type': 'array', 'itemType': QueryDomainAdminDivisionResponseBodyAdminDivisionsAdminDivision },
    };
  }

  validate() {
    if(Array.isArray(this.adminDivision)) {
      $dara.Model.validateArray(this.adminDivision);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainAdminDivisionResponseBody extends $dara.Model {
  adminDivisions?: QueryDomainAdminDivisionResponseBodyAdminDivisions;
  /**
   * @example
   * 4EA05A10-D4BC-47EA-AD9E-370A46BB4FB9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adminDivisions: 'AdminDivisions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminDivisions: QueryDomainAdminDivisionResponseBodyAdminDivisions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.adminDivisions && typeof (this.adminDivisions as any).validate === 'function') {
      (this.adminDivisions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

