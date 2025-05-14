// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventShrinkRequest extends $dara.Model {
  attendeesShrink?: string;
  cardInstancesShrink?: string;
  description?: string;
  endShrink?: string;
  extraShrink?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  locationShrink?: string;
  onlineMeetingInfoShrink?: string;
  recurrenceShrink?: string;
  /**
   * **if can be null:**
   * false
   */
  remindersShrink?: string;
  richTextDescriptionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  summary?: string;
  uiConfigsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startShrink?: string;
  static names(): { [key: string]: string } {
    return {
      attendeesShrink: 'Attendees',
      cardInstancesShrink: 'CardInstances',
      description: 'Description',
      endShrink: 'End',
      extraShrink: 'Extra',
      isAllDay: 'IsAllDay',
      locationShrink: 'Location',
      onlineMeetingInfoShrink: 'OnlineMeetingInfo',
      recurrenceShrink: 'Recurrence',
      remindersShrink: 'Reminders',
      richTextDescriptionShrink: 'RichTextDescription',
      summary: 'Summary',
      uiConfigsShrink: 'UiConfigs',
      calendarId: 'calendarId',
      startShrink: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesShrink: 'string',
      cardInstancesShrink: 'string',
      description: 'string',
      endShrink: 'string',
      extraShrink: 'string',
      isAllDay: 'boolean',
      locationShrink: 'string',
      onlineMeetingInfoShrink: 'string',
      recurrenceShrink: 'string',
      remindersShrink: 'string',
      richTextDescriptionShrink: 'string',
      summary: 'string',
      uiConfigsShrink: 'string',
      calendarId: 'string',
      startShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

