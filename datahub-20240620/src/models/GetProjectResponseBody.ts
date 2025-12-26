// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBody extends $dara.Model {
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @example
   * 1559031978056215
   */
  creator?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * 12252454
   */
  storage?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 1724041098000
   */
  updateTime?: string;
  /**
   * @example
   * [11.22.33.44]
   */
  vpcWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      storage: 'Storage',
      success: 'Success',
      updateTime: 'UpdateTime',
      vpcWhitelist: 'VpcWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      creator: 'string',
      projectName: 'string',
      requestId: 'string',
      storage: 'number',
      success: 'boolean',
      updateTime: 'string',
      vpcWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

