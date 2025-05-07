// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return custom namespaces. Valid values:
   * 
   * *   **true**: The system returns custom namespaces.
   * *   **false**: The system does not return custom namespaces.
   * 
   * @example
   * true
   */
  containCustom?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude hybrid cloud namespaces from the result. Valid values:
   * 
   * - **true**: The system excludes hybrid cloud namespaces from the result.
   * - **false**: The system does not exclude hybrid cloud namespaces from the result.
   * 
   * @example
   * true
   */
  hybridCloudExclude?: boolean;
  static names(): { [key: string]: string } {
    return {
      containCustom: 'ContainCustom',
      hybridCloudExclude: 'HybridCloudExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containCustom: 'boolean',
      hybridCloudExclude: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

