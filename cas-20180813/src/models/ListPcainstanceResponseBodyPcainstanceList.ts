// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListPCAInstanceResponseBodyPCAInstanceList extends $dara.Model {
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * qingqitest
   */
  aliasName?: string;
  /**
   * @example
   * 1efb82eb-19e5-620f-bdaa-11cc6cb2a720
   */
  caIdentifier?: string;
  /**
   * @example
   * 10
   */
  certCount?: number;
  /**
   * @example
   * 2024-08-09T10:05:18
   */
  endTime?: number;
  /**
   * @example
   * 1ef3fefc-8065-60de-871e-d15cf842aab6
   */
  instanceUuid?: string;
  /**
   * @example
   * 0
   */
  issuedCertCount?: number;
  /**
   * @example
   * false
   */
  relateStatus?: boolean;
  /**
   * @example
   * 1
   */
  shareFlag?: number;
  /**
   * @example
   * 0
   */
  trial?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      aliasName: 'AliasName',
      caIdentifier: 'CaIdentifier',
      certCount: 'CertCount',
      endTime: 'EndTime',
      instanceUuid: 'InstanceUuid',
      issuedCertCount: 'IssuedCertCount',
      relateStatus: 'RelateStatus',
      shareFlag: 'ShareFlag',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      aliasName: 'string',
      caIdentifier: 'string',
      certCount: 'number',
      endTime: 'number',
      instanceUuid: 'string',
      issuedCertCount: 'number',
      relateStatus: 'boolean',
      shareFlag: 'number',
      trial: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

