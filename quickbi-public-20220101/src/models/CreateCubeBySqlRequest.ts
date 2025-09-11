// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCubeBySqlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  caption?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from qqq
   */
  customSql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdaf-asda*****asd
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customSql: 'CustomSql',
      dsId: 'DsId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customSql: 'string',
      dsId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

