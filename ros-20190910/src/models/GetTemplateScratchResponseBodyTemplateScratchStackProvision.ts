// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchResponseBodyTemplateScratchStackProvision extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource is replicated by calling the [CreateStack](https://help.aliyun.com/document_detail/132086.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * Indicates whether the resource is managed by calling the [CreateChangeSet](https://help.aliyun.com/document_detail/131051.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  importable?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatable: 'Creatable',
      importable: 'Importable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      importable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

