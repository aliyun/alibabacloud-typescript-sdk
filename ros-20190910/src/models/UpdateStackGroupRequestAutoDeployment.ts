// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackGroupRequestAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * The IDs of the members in the resource directory. You can specify a maximum of 20 member IDs.
   * 
   * >  To view the member IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the detailed information of a member](https://help.aliyun.com/document_detail/111624.html).
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The IDs of the members in the resource directory. You can specify a maximum of 20 member IDs.
   * 
   * >  To view the member IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the detailed information of a member](https://help.aliyun.com/document_detail/111624.html).
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

