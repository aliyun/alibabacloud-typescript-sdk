// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList extends $dara.Model {
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RHBA-2019:2599: krb5 bug fix update
   */
  aliasName?: string;
  /**
   * @remarks
   * The version number of the pre-patch that is required to fix the Windows system vulnerability.
   * 
   * @example
   * 4523204
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchList extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the pre-patches that are required to fix the specified Windows system vulnerability on the server.
   */
  patchList?: DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList[];
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-4545****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      patchList: 'PatchList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patchList)) {
      $dara.Model.validateArray(this.patchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the information about the pre-patches that are required to fix the specified Windows system vulnerability.
   */
  frontPatchList?: DescribeFrontVulPatchListResponseBodyFrontPatchList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F929E952-EBFC-56C3-BD35-BF8B59024C68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      frontPatchList: 'FrontPatchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontPatchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frontPatchList)) {
      $dara.Model.validateArray(this.frontPatchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

