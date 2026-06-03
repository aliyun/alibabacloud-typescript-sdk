// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyVerifySchemeRequest extends $dara.Model {
  /**
   * @remarks
   * native：1，web：5
   * 
   * @example
   * 1
   */
  cmApiCode?: number;
  /**
   * @remarks
   * true，将在移动侧创建新的AppId，false将直接从模版方案中复制已经创建的移动AppId信息
   * 
   * @example
   * true
   */
  cmNewFlag?: boolean;
  /**
   * @remarks
   * native：3，web：8
   * 
   * @example
   * 3
   */
  ctApiCode?: number;
  /**
   * @remarks
   * true，将在电信侧创建新的AppId，false将直接从模版方案中复制已经创建的电信AppId信息
   * 
   * @example
   * false
   */
  ctNewFlag?: boolean;
  /**
   * @remarks
   * native：9，web：10
   * 
   * @example
   * 9
   */
  cuApiCode?: number;
  /**
   * @remarks
   * true，将在联通侧创建新的AppId，false将直接从模版方案中复制已经创建的联通AppId信息
   * 
   * @example
   * false
   */
  cuNewFlag?: boolean;
  /**
   * @example
   * ****@xxx.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC1001212***32
   */
  modelSceneCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cmApiCode: 'CmApiCode',
      cmNewFlag: 'CmNewFlag',
      ctApiCode: 'CtApiCode',
      ctNewFlag: 'CtNewFlag',
      cuApiCode: 'CuApiCode',
      cuNewFlag: 'CuNewFlag',
      email: 'Email',
      modelSceneCode: 'ModelSceneCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmApiCode: 'number',
      cmNewFlag: 'boolean',
      ctApiCode: 'number',
      ctNewFlag: 'boolean',
      cuApiCode: 'number',
      cuNewFlag: 'boolean',
      email: 'string',
      modelSceneCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

