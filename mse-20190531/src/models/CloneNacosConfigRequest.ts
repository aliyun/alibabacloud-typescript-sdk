// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneNacosConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The configuration items to clone, in the format of dataId+group. Separate multiple configuration items with commas (,).
   * 
   * @example
   * test+test,test1+test1
   */
  dataIds?: string;
  /**
   * @remarks
   * The list of configuration IDs.
   * 
   * @example
   * 253661,253662
   * 
   * @deprecated
   */
  ids?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m25igg403
   */
  instanceId?: string;
  /**
   * @remarks
   * The source namespace ID.
   * 
   * @example
   * be821963-6d48-4ea5-9910-6057d****
   */
  originNamespaceId?: string;
  /**
   * @remarks
   * The policy used when a write conflict occurs. Valid values:
   * 
   * - ABORT
   * - SKIP
   * - OVERWRITE.
   * 
   * This parameter is required.
   * 
   * @example
   * OVERWRITE
   */
  policy?: string;
  /**
   * @remarks
   * The destination namespace ID.
   * 
   * @example
   * 08be4b5d-2d1c-4e6e-aa85-83b9****
   */
  targetNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataIds: 'DataIds',
      ids: 'Ids',
      instanceId: 'InstanceId',
      originNamespaceId: 'OriginNamespaceId',
      policy: 'Policy',
      targetNamespaceId: 'TargetNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataIds: 'string',
      ids: 'string',
      instanceId: 'string',
      originNamespaceId: 'string',
      policy: 'string',
      targetNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

