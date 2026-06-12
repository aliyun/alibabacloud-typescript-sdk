// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @remarks
   * The time when the project was created.
   * 
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the project.
   * 
   * @example
   * 1559031978056215
   */
  creator?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * The total storage capacity of the project.
   * 
   * @example
   * 12252454
   */
  storage?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the project was last updated.
   * 
   * @example
   * 1724041098000
   */
  updateTime?: string;
  /**
   * @remarks
   * The VPC whitelist of the project.
   * 
   * @example
   * [\\"11.22.33.44\\"]
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

