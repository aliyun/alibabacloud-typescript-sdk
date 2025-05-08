// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneNacosConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned message:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Configuration items to be cloned, in the format of dataId+group, with multiple items separated by commas.
   * 
   * @example
   * test+test,test1+test1
   */
  dataIds?: string;
  /**
   * @remarks
   * List of configuration IDs.
   * 
   * @example
   * 253661,253662
   * 
   * @deprecated
   */
  ids?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-i7m25igg403
   */
  instanceId?: string;
  /**
   * @remarks
   * Source namespace ID.
   * 
   * @example
   * be821963-6d48-4ea5-9910-6057d****
   */
  originNamespaceId?: string;
  /**
   * @remarks
   * The strategy used when a write conflict occurs.
   * 
   * - ABORT
   * - SKIP
   * - OVERWRITE
   * 
   * This parameter is required.
   * 
   * @example
   * OVERWRITE
   */
  policy?: string;
  /**
   * @remarks
   * Target namespace ID.
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

