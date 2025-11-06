// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc extends $dara.Model {
  /**
   * @example
   * 18
   */
  classNum?: number;
  /**
   * @example
   * New Zealand
   */
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      classNum: 'ClassNum',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classNum: 'number',
      desc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimClassDescs extends $dara.Model {
  classDesc?: LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc[];
  static names(): { [key: string]: string } {
    return {
      classDesc: 'ClassDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classDesc: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimClassDescsClassDesc },
    };
  }

  validate() {
    if(Array.isArray(this.classDesc)) {
      $dara.Model.validateArray(this.classDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet extends $dara.Model {
  street?: string[];
  static names(): { [key: string]: string } {
    return {
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      street: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.street)) {
      $dara.Model.validateArray(this.street);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr extends $dara.Model {
  /**
   * @example
   * NZ
   */
  cc?: string;
  /**
   * @example
   * Auckland
   */
  city?: string;
  /**
   * @example
   * 1010
   */
  pc?: string;
  /**
   * @example
   * Auckland
   */
  sp?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      pc: 'Pc',
      sp: 'Sp',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      pc: 'string',
      sp: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddrStreet,
    };
  }

  validate() {
    if(this.street && typeof (this.street as any).validate === 'function') {
      (this.street as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContactsContact extends $dara.Model {
  addr?: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 4472335**8
   */
  fax?: string;
  /**
   * @example
   * Tom
   */
  name?: string;
  /**
   * @example
   * Tom
   */
  org?: string;
  /**
   * @example
   * agent
   */
  type?: string;
  /**
   * @example
   * 1390000****
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      email: 'Email',
      fax: 'Fax',
      name: 'Name',
      org: 'Org',
      type: 'Type',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: LookupTmchNoticeResponseBodyClaimsClaimContactsContactAddr,
      email: 'string',
      fax: 'string',
      name: 'string',
      org: 'string',
      type: 'string',
      voice: 'string',
    };
  }

  validate() {
    if(this.addr && typeof (this.addr as any).validate === 'function') {
      (this.addr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimContacts extends $dara.Model {
  contact?: LookupTmchNoticeResponseBodyClaimsClaimContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimContactsContact },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet extends $dara.Model {
  street?: string[];
  static names(): { [key: string]: string } {
    return {
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      street: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.street)) {
      $dara.Model.validateArray(this.street);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr extends $dara.Model {
  /**
   * @example
   * NZ
   */
  cc?: string;
  /**
   * @example
   * Wellington
   */
  city?: string;
  /**
   * @example
   * 6011
   */
  pc?: string;
  /**
   * @example
   * Wellington
   */
  sp?: string;
  street?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      pc: 'Pc',
      sp: 'Sp',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      pc: 'string',
      sp: 'string',
      street: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddrStreet,
    };
  }

  validate() {
    if(this.street && typeof (this.street as any).validate === 'function') {
      (this.street as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder extends $dara.Model {
  addr?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr;
  /**
   * @example
   * owner
   */
  entitlement?: string;
  /**
   * @example
   * Whitcoulls 2011 Limited
   */
  org?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      entitlement: 'Entitlement',
      org: 'Org',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolderAddr,
      entitlement: 'string',
      org: 'string',
    };
  }

  validate() {
    if(this.addr && typeof (this.addr as any).validate === 'function') {
      (this.addr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimHolders extends $dara.Model {
  holder?: LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder[];
  static names(): { [key: string]: string } {
    return {
      holder: 'Holder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holder: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaimHoldersHolder },
    };
  }

  validate() {
    if(Array.isArray(this.holder)) {
      $dara.Model.validateArray(this.holder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaimJurDesc extends $dara.Model {
  /**
   * @example
   * New Zealand
   */
  desc?: string;
  /**
   * @example
   * NZ
   */
  jurCC?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      jurCC: 'JurCC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      jurCC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaimsClaim extends $dara.Model {
  classDescs?: LookupTmchNoticeResponseBodyClaimsClaimClassDescs;
  contacts?: LookupTmchNoticeResponseBodyClaimsClaimContacts;
  /**
   * @example
   * Class 9: Calculators; bags, coverings,containers, carriers and holders for mobile phones, personal handheld computers and notebooks; headphones; speakers; blank storage media;batteries. Class 16: Paper
   */
  goodsAndServices?: string;
  holders?: LookupTmchNoticeResponseBodyClaimsClaimHolders;
  jurDesc?: LookupTmchNoticeResponseBodyClaimsClaimJurDesc;
  /**
   * @example
   * POTED
   */
  markName?: string;
  static names(): { [key: string]: string } {
    return {
      classDescs: 'ClassDescs',
      contacts: 'Contacts',
      goodsAndServices: 'GoodsAndServices',
      holders: 'Holders',
      jurDesc: 'JurDesc',
      markName: 'MarkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classDescs: LookupTmchNoticeResponseBodyClaimsClaimClassDescs,
      contacts: LookupTmchNoticeResponseBodyClaimsClaimContacts,
      goodsAndServices: 'string',
      holders: LookupTmchNoticeResponseBodyClaimsClaimHolders,
      jurDesc: LookupTmchNoticeResponseBodyClaimsClaimJurDesc,
      markName: 'string',
    };
  }

  validate() {
    if(this.classDescs && typeof (this.classDescs as any).validate === 'function') {
      (this.classDescs as any).validate();
    }
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    if(this.holders && typeof (this.holders as any).validate === 'function') {
      (this.holders as any).validate();
    }
    if(this.jurDesc && typeof (this.jurDesc as any).validate === 'function') {
      (this.jurDesc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBodyClaims extends $dara.Model {
  claim?: LookupTmchNoticeResponseBodyClaimsClaim[];
  static names(): { [key: string]: string } {
    return {
      claim: 'Claim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claim: { 'type': 'array', 'itemType': LookupTmchNoticeResponseBodyClaimsClaim },
    };
  }

  validate() {
    if(Array.isArray(this.claim)) {
      $dara.Model.validateArray(this.claim);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupTmchNoticeResponseBody extends $dara.Model {
  claims?: LookupTmchNoticeResponseBodyClaims;
  /**
   * @example
   * 586608000000
   */
  id?: number;
  /**
   * @example
   * noted
   */
  label?: string;
  /**
   * @example
   * 2018-10-15T00:00:00.0Z
   */
  notAfter?: string;
  /**
   * @example
   * 2018-10-13T00:00:00.0Z
   */
  notBefore?: string;
  /**
   * @example
   * 01C10C8E-0468-468C-BCD9-E709BDD0AE8F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      claims: 'Claims',
      id: 'Id',
      label: 'Label',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claims: LookupTmchNoticeResponseBodyClaims,
      id: 'number',
      label: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.claims && typeof (this.claims as any).validate === 'function') {
      (this.claims as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

