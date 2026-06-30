// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketShrinkRequest extends $dara.Model {
  customFields?: string;
  notifyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openTemplateBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processorUserIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  sceneContextShrink?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      notifyShrink: 'Notify',
      openTeamId: 'OpenTeamId',
      openTemplateBizId: 'OpenTemplateBizId',
      processorUserIdsShrink: 'ProcessorUserIds',
      scene: 'Scene',
      sceneContextShrink: 'SceneContext',
      tenantContextShrink: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: 'string',
      notifyShrink: 'string',
      openTeamId: 'string',
      openTemplateBizId: 'string',
      processorUserIdsShrink: 'string',
      scene: 'string',
      sceneContextShrink: 'string',
      tenantContextShrink: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

