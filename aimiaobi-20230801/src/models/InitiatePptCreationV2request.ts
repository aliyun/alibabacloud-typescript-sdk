// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationV2Request extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the external user.
   * 
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * Specifies whether the request originates from a mobile client.
   * 
   * @example
   * true
   */
  isMobile?: boolean;
  /**
   * @remarks
   * The presentation outline, formatted in Markdown.
   * 
   * @example
   * # 中国传统文化艺术的魅力
   * 
   * ## 1. 传统文化艺术的源远流长
   * 
   * ### 1.1 中国古代艺术发展历程
   * 
   * #### 1.1.1 古代绘画艺术的演变
   * - 从新石器时代的彩陶绘画到东汉时期帛画的出现，绘画形式不断丰富，展现了古人对美的独特追求。唐代绘画风格多样，吴道子的《送子天王图》线条流畅，色彩绚丽，体现了唐代绘画的高超技艺。
   * 
   * #### 1.1.2 书法艺术的传承与创新
   * - 书法从甲骨文到楷书、行书、草书，历经数千年演变，承载着中华文化的深厚内涵。王羲之的《兰亭序》被誉为“天下第一行书”，其笔法精妙，结构严谨，展现了书法艺术的巅峰。
   */
  outline?: string;
  /**
   * @remarks
   * The ID of the PPT template.
   * 
   * @example
   * 500
   */
  pptTemplateId?: number;
  /**
   * @remarks
   * The template type. The default value is `1`. Valid values: `1` (system template) and `2` (enterprise template).
   * 
   * @example
   * 1
   */
  pptTemplateType?: number;
  /**
   * @example
   * 中国传统文化艺术的魅力
   */
  pptTitle?: string;
  /**
   * @remarks
   * The type of process to initiate. Valid values:<br>
   * `0`: Generates only a signature to initialize the front-end SDK for the full creation process.<br>
   * `1`: Generates a signature and a process ID. Use this option if you have a custom front-end page for templates before you initialize the SDK.<br>
   * `2`: Generates an artifact ID, which allows for direct editing of the artifact.<br>
   * `3`: Generates an export task ID. You can poll this ID to retrieve the export result.<br><br><br><br>
   * 
   * @example
   * 1
   */
  processType?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8a7dfece-f204-4380-a7d0-a13d37de3924
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      isMobile: 'IsMobile',
      outline: 'Outline',
      pptTemplateId: 'PptTemplateId',
      pptTemplateType: 'PptTemplateType',
      pptTitle: 'PptTitle',
      processType: 'ProcessType',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      isMobile: 'boolean',
      outline: 'string',
      pptTemplateId: 'number',
      pptTemplateType: 'number',
      pptTitle: 'string',
      processType: 'number',
      taskId: 'string',
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

